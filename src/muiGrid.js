import React from 'react'
import {Avatar, Box, Chip, Grid, Link, Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Image from "./objimage3.jpg"
import Raptors from "./raptors-background.jpg"

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Raptors})`,
    // position: 'absolute',
    boxSizing: 'border-box',
    display: 'flex',
  },
  header: {
    backgroundColor: 'white',
    height: '600px',
    width: '1400px',
    margin: '30px auto',
    padding: '30px',  
  },
  cover: {
    backgroundColor: 'white',
    objectFit: 'contain',
  },
  headerDescription: {
    flexDirection: 'column',
    margin: '0 40px',
    overflowY: 'scroll',
    height: '450px',
    width: '450px',
  },
  createdBy: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
  creator:{
    display: 'flex',
    backgroundColor: '#eee',
    height: '60px',
    width: '260px',
    borderRadius: '30px',
    alignItems: 'center',
    margin: '0 30px',
    
  },
  avatar: {
    height: '45px',
    width: '45px',
    padding: '20px 10px',
    borderRadius: '50%',
  },
  creatorName: {
    fontSize: '1.2rem',
    padding: '30px',
    paddingTop: '35px',
    fontWeight: 200,
  }
})

const MuiGrid = () => {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
    <Grid container className={classes.header}>
      
      <Grid item spacing={3}>
        <img className={classes.cover} src={Image} alt=''
        height="450" width="800"/>
      </Grid>
      
      <Grid item className={classes.headerDescription}>
        <h1 className="header">Super Toy</h1>
        <Typography variant='subtitle1' className={classes.createdBy}>
          Created by
          <Box className={classes.creator}>
              <img className={classes.avatar} src={Image} alt=''/>
              <span className={classes.creatorName}>Creator</span>
          </Box>
        </Typography>
          {/* <Link href='https://www.google.com' target='_blank'>Click here</Link> */}
        <p className="description">Lorem sipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam laboriosam voluptatum corporis provident et consectetur quo reprehenderit, sint fugiat tempore dolorum, culpa atque nostrum alias ea veniam, numquam officia fuga. Excepturi cumque laudantium ipsum fuga, esse corrupti sapiente aut amet eum ab debitis magnam suscipit quos aliquid eligendi? Dignissimos, veniam id. Maiores nulla aspernatur fuga nisi, qui, exercitationem quaerat, et praesentium asperiores incidunt dolor enim earum doloribus libero dignissimos saepe aliquam assumenda officia pariatur esse nesciunt ex. Quis molestias cum adipisci voluptate perferendis ab vero! Soluta veniam, nulla qui quas optio numquam laboriosam reprehenderit aliquid unde odit rem, debitis eius quam incidunt? Accusantium eveniet assumenda aliquid excepturi et sit, quasi omnis voluptatum minus atque delectus alias fugiat est culpa dolore dicta voluptate a incidunt reprehenderit! Quas maxime ab fuga, quasi quos reiciendis cumque expedita sint deserunt nobis voluptatem excepturi hic doloremque vel et rem ullam. Sapiente magni facilis voluptatum mollitia laudantium eveniet aspernatur sit ut expedita quas suscipit dignissimos cumque dolores, pariatur dolore soluta tempora commodi recusandae voluptatibus quae, molestias explicabo ex deleniti! Corrupti, perferendis. Eaque hic, obcaecati delectus blanditiis illum sit illo aut libero natus voluptas sequi enim, eius doloribus molestiae. Dolorum maxime tempore iure, quas exercitationem labore deserunt reprehenderit vero eveniet quaerat rerum esse sed ea odio facere, ullam accusantium accusamus consectetur dolorem. Quod doloremque modi tenetur vero inventore, voluptatibus velit repudiandae accusamus et blanditiis eius quaerat, dolores corrupti. Eum iste fuga in similique minima quasi modi nihil sapiente dignissimos unde! Alias obcaecati consectetur dolor, itaque dignissimos aliquam, accusamus ratione illo, nulla dolorum consequatur neque enim possimus explicabo doloribus fuga quibusdam quasi voluptate officia quo ipsum. Atque sint, nulla suscipit facilis cupiditate labore consequatur rem. In, cupiditate molestiae? Impedit laboriosam maxime in labore repellat, hic officiis ipsam! Explicabo deleniti dolore veritatis magnam expedita odit aperiam pariatur laborum? Officiis itaque dicta distinctio, sequi iusto rerum voluptatem, asperiores placeat eveniet natus iure fuga. Nemo cupiditate, dolores quibusdam nesciunt veniam corrupti possimus, voluptatem deleniti fugit dolorem aliquid error! Atque id, officia cumque autem voluptatum architecto? Cumque tempora rerum soluta sunt sequi accusantium, hic repellendus nostrum dolore veritatis expedita facilis, vitae, libero repudiandae in placeat possimus quo illo consequuntur. Incidunt, harum enim rerum temporibus dolor sit voluptatum alias rem iste officiis reiciendis facere voluptatibus non inventore illo nostrum ad sequi labore atque quaerat id nihil nesciunt consequuntur. Voluptas quas iusto, dolore impedit, inventore distinctio repellat praesentium quia molestias culpa ipsam quasi.</p>
      </Grid>

    </Grid>
    </Box>
  )
}

export default MuiGrid
