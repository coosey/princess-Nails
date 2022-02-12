import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#DCDCDC',
    color: 'black',
    "&:hover, &.Mui-focusVisible": {
      transiiton: '0.3s',
      color: '#397BA6',
      backgroundColor: '#DCDCDC'
    },
    right: '5%'
  }
}))

const ScrollArrow = ({showBelow}) => {
  const classes = useStyles();
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {
        show &&
        <IconButton
          aria-label="Back to Top"
          onClick={handleClick}
          className={classes.toTop}
        >
          <ArrowUpwardIcon />
        </IconButton>
      }
    </div>
  )
}

export default ScrollArrow;