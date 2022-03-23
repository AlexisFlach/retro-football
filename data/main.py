from bs4 import BeautifulSoup
import requests
import re
import csv
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

APP_BASE_URL = os.environ.get("BASE_URL")
APP_API_URL_FULL_PATH = os.environ.get("API_URL_FULL_PATH")

res = requests.get(APP_API_URL_FULL_PATH)

def get_club_links():
  html = res.text
  soup = BeautifulSoup(html, 'lxml')
  cells = soup.find_all('tr')
  club_links = []  
  for link in cells:
    for l in link.find_all('a', attrs = {"href": True}):
      if l.text.find("Info") != -1: 
        club_links.append(APP_BASE_URL + l["href"])
  return club_links

links = get_club_links()

def parse_club(url):
  res = requests.get(url)
  html = res.text
  soup = BeautifulSoup(html, 'lxml')
  re_team_name = re.compile('Team:')
  re_full_name = re.compile('Full name:')
  re_stadium = re.compile('stadium:')
  re_country = re.compile('Country:')

  fullname = soup.find(text=re_full_name).parent.parent.find_next_sibling('td').text
  name = soup.find(text=re_team_name).parent.parent.find_next_sibling('td').text
  stadium = soup.find(text=re_stadium).parent.parent.find_next_sibling('td').find("a").text
  country = soup.find(text=re_country).parent.parent.find_next_sibling('td').find("img")["title"]

  nickname = ""
  try:
    re_nickname = re.compile("Nickname:")
    nickname = soup.find(text=re_nickname).parent.parent.find_next_sibling('td').text.split(",")[0]
  except AttributeError as err:
    nickname = 'None'

  team = {
    "Name": name,
    "Full Name": fullname,
    "Nickname": nickname,
    "Stadium": stadium,
    "Country": country
    }

  return team
   
def save_csv(results):
    keys = results[0].keys()

    with open('output/clubs.csv', 'w') as f:
        dict_writer = csv.DictWriter(f, keys)
        dict_writer.writeheader()
        dict_writer.writerows(results)

def main():
    results = []
    for x in range(1, 2):
        print('Getting Page ', x)
        urls = get_club_links()
        for url in urls:
            results.append(parse_club(url))
        print('Total results: ', len(results))
        save_csv(results)

if __name__ == '__main__':
    main()
  