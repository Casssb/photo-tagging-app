import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Anchor,
  Title,
  Image,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { reset } from '../../redux/slices/gameSlice';
import CharAvatars from './CharAvatars';
import Timer from './Timer';
import puzzleIcon from '../../assets/images/puzzle-icon.png';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: 'grape',
      }).background,
      color: theme.fn.variant({ variant: 'light', color: 'pink.8' }).color,
    },
  },
}));

const links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: 'info',
    label: 'Info',
  },
  {
    link: 'scoreboard',
    label: 'Scoreboard',
  },
];

const HeaderResponsive = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { isGameOn } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('(max-width: 800px)');

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      sx={{ '&.active': classes.active }}
      component={NavLink}
      underline={false}
      to={link.link}
      className={cx(classes.link)}
      onClick={() => {
        close();
        dispatch(reset());
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={40} className={classes.root}>
      <Container className={classes.header}>
        {isMobile ? (
          <Image
            src={puzzleIcon}
            width={'60px'}
            alt="multi-coloured puzzle icon"
          />
        ) : (
          <Title
            order={2}
            variant="gradient"
            gradient={{ from: 'red', to: 'purple', deg: 45 }}
          >
            Pixel Seek
          </Title>
        )}
        {isGameOn && (
          <>
            <CharAvatars />
            <Timer />
          </>
        )}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          title={opened ? 'Close Navigation' : 'Open Navigation'}
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderResponsive;
