import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'


const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 2px 3px #dddddd;
  background-color: #fafafa;
  border-top: 2px solid #dddddd;
`

const MiddleConsole = styled(Typography)`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
  :first-of-type {
    height: 25%;
    justify-content: flex-end;
    align-items: flex-end;
    color: #000;
    font-size: 30px;
    padding-bottom:1rem;
  }
  :last-of-type {
    height: 75%;
    justify-content: center;
    
  }
`

const Column = styled.div`
  :first-of-type {
    width: 10%;
  }
  :last-of-type {
    width: 90%;
    position: relative;
  }
`

const Rows = styled.div`
  height:25%;
  border-top: 1px dotted #dddddd;
  border-left: 1px solid #dddddd;
}
`
const SkillRows = styled.div`
  height:25%;
  display:flex;
  justify-content: flex-end;
  margin-right:1rem;
  :first-of-type{
    margin-top:-7px;
  }
  :nth-of-type(n+2){
    margin-top:-3px;
  }
`

const BarsContainer = styled.div`
    /* display:block; */
    /* background-color: green; */
    position: absolute;
    top: 0;
    width:100%;
    height:100%;
    display:flex;
    align-items: flex-end;

`
const Bars = styled.div`
  /* background-color: ${props => props.color}; */
  height: ${props => props.height};
  background: linear-gradient(white, 1%, ${props => props.color});
  width:100%;
  margin-left:1rem;
  border-radius: 5px 5px 0 0;
  border: 1px solid #dddddd;
  justify-content: flex-end;
  align-items: center;
  display:flex;
  flex-direction:column;

  		@keyframes expand {
			0% {
				height: 0%;
			}
			100% {
				hieght:100%;
			}
		}

    :nth-child(1){animation: expand 1s -.6s ease-in-out;}
    :nth-child(2){animation: expand 1s -.3s ease-in-out; } 
    :nth-child(3){animation: expand 1s 0s ease-in-out;}
    :nth-child(4){animation: expand 1s  .3s ease-in-out;}
    :nth-child(5){animation: expand 1s  .6s ease-in-out; }

`

const BarInfo = styled(Typography)`
  color: white;
  text-shadow: 0 -1px 1px #a3a3a3;
  :first-of-type{
    display:flex;
    align-items:center;
    opacity: 0.4;
	  font-size: 60px;
    margin-bottom:0.5rem;
    p {
      font-size: 30px
    }
  }
  :last-of-type{
	  font-size: 15px;
    margin-bottom:2rem;
  }
`

const Skills = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
	const skillLevel= ['Jedi','Apprentice','Padawan','Youngling']
	const skills = [
		{
			skill: 'Coffee Drinking',
			color: '#fcd0a1',
			height: '95%'
		},{
			skill: 'React',
			color: '#b1b695',
			height: '90%'
		},{
			skill: 'Sketch',
			color: '#a690a4',
			height: '95%'
		},{
			skill: 'Procreate',
			color: '#5e4b56',
			height: '75%'
		},{
			skill: 'Yoga',
			color: '#afd2e9',
			height: '40%'
		}
	]
  
	return (
		<Container>
			<MiddleConsole weight="normal">
        My skills
			</MiddleConsole>
			<MiddleConsole>
				<Column>
					{
						skillLevel.map((item, index) => {
							return (<SkillRows key={index}>{item}</SkillRows>)
						})
					}
				</Column>
				<Column>
					<BarsContainer>
						{
							skills.map((item, index) => {
								return (
									<Bars color={item.color} height={item.height} key={1}>
										<BarInfo color={item.color}>
											{item.height.split('%')[0]}<p>%</p>
										</BarInfo>
										<BarInfo>{item.skill}</BarInfo>
									</Bars>)
							})
						}
					</BarsContainer>
					{
						skillLevel.map((item, index) => {
							return (<Rows key={index}></Rows>)
						})
					}
				</Column>
			</MiddleConsole>
		</Container> 
	)
}

export default Skills