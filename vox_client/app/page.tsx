'use client';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import styles from './page.module.css';
import { styled, useColorScheme } from '@mui/joy/styles';
import ThemeToggle from '@/component/theme/toggle';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <Button variant="soft">Hello World</Button>
      </div>
      <div>sss</div>
      <ThemeToggle /> */}
      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
        <Grid xs={2} height="100vh">
          <Box height={'100vh'} width={'100%'} p={1} sx={{ borderRight: '1px solid grey' }}>
            <AccordionGroup
              sx={{
                maxWidth: 400,
                [`& .${accordionClasses.root}`]: {
                  marginTop: '0.5rem',
                  transition: '0.2s ease',
                  '& button:not([aria-expanded="true"])': {
                    transition: '0.2s ease',
                    paddingBottom: '0.625rem',
                  },
                  '& button:hover': {
                    background: 'transparent',
                  },
                },
                [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                  bgcolor: 'background.level1',
                  borderRadius: 'md',
                  borderBottom: '1px solid',
                  borderColor: 'background.level2',
                },
                '& [aria-expanded="true"]': {
                  boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                },
              }}
            >
              <Accordion>
                <AccordionSummary>First accordion</AccordionSummary>
                <AccordionDetails>
                  <AccordionGroup
                    sx={{
                      maxWidth: 400,
                      [`& .${accordionClasses.root}`]: {
                        marginTop: '0.5rem',
                        transition: '0.2s ease',
                        '& button:not([aria-expanded="true"])': {
                          transition: '0.2s ease',
                          paddingBottom: '0.625rem',
                        },
                        '& button:hover': {
                          background: 'transparent',
                        },
                      },
                      [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                        bgcolor: 'background.level1',
                        borderRadius: 'md',
                        borderBottom: '1px solid',
                        borderColor: 'background.level2',
                      },
                      '& [aria-expanded="true"]': {
                        boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
                      },
                    }}
                  >
                    <Accordion>
                      <AccordionSummary>First accordion</AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Second accordion</AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Third accordion</AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </AccordionDetails>
                    </Accordion>
                  </AccordionGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Second accordion</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Third accordion</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </Box>
        </Grid>
        <Grid xs={10}>Content</Grid>
      </Grid>
    </main>
  );
}

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));
