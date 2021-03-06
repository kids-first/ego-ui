import colors from 'common/colors';

const styles = {
  container: {
    position: 'relative',
    backgroundColor: colors.teal,
    color: '#fff',
    width: 240,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
    // transition: 'width 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    '&.collapsed': {
      width: 50,
    },
  },

  emblem: {
    margin: '60px auto 0',
    '.collapsed &': {
      margin: '30px auto 0',
    },
    '& img': {
      display: 'block',
      margin: 'auto',
      '&.small': {
        height: 0,
        visibility: 'hidden',
      },
      '&.regular': {
        width: '33%',
        visibility: 'visible',
      },
      '.collapsed &': {
        '&.small': {
          height: 'auto',
          width: '66%',
          visibility: 'visible',
        },
        '&.regular': {
          height: 0,
          width: '33%',
          visibility: 'hidden',
        },
      },
    },
  },

  linkList: {
    flexGrow: 1,
  },

  link: {
    fontWeight: 'lighter',
    lineHeight: '35px',
    fontSize: 22,
    color: '#fff',
    position: 'relative',
    display: 'flex',
    width: '100%',
    padding: 4,
    '& .content': {
      width: '60%',
      margin: 'auto',
      position: 'relative',
      zIndex: 2,
      display: 'flex',
    },
    '& i': {
      flex: 'none',
    },
    '&::before': {
      display: 'block',
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#00a1d8',
      content: '""',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      padding: '0.5em 0.5em',
      // transition: 'opacity 0.15s, transform 0.2s 0.15s, box-shadow 0.2s 0.15s',
      transform: 'scaleX(1) scaleY(1)',
      boxShadow: '-3px 0px 1px 1px rgba(0, 0, 0, 0.1)',
      opacity: 0,
    },
    '&:hover': {
      color: '#fff',
      backgroundColor: '#53bfe5',
    },
    '&.active': {
      '& div': {
        textShadow: '-3px 2px 2px rgba(0,0,0,0.2)',
      },
      '&::before': {
        boxShadow: '-3px 3px 1px 1px rgba(0, 0, 0, 0.1)',
        opacity: 1,
      },
      '&::before, & .rippleJS': {
        transform: 'scaleX(1.03) scaleY(1.05)',
      },
    },
    '& .text': {
      marginLeft: 5,
      // transition: 'opacity 0.25s cubic-bezier(0.19, 1, 0.22, 1)',
      '.collapsed &': {
        opacity: 0,
      },
    },
  },
  collapse: {
    textAlign: 'right',
    background: '#00a1d8',
    color: '#fff',
    fontSize: 22,
    padding: 10,
  },
  currentUser: {
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 12,
    paddingBottom: 12,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#53bfe5',
    },
    '& .display-name': {
      // transition: 'opacity 0.25s cubic-bezier(0.19, 1, 0.22, 1)',
      '.collapsed &': {
        opacity: 0,
      },
    },
  },
};

export default styles;
