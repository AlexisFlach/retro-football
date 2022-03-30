import { FlexRow, FlexColumn } from '../styles/Flex.styled'
import { Button } from '../styles/Button.styled'

export const Home = () => {
  return (
    <>
      <FlexRow>
        <FlexColumn size={12}>
          <h1>Welcome to Retro Football</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, blanditiis?</p>
          <Button to="/clubs">To clubs</Button>
        </FlexColumn>
      </FlexRow>
    </>
  )
}