import { Button, ButtonGroup, TextField, Typography } from '@mui/material'

function SearchPage() {
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        zkb-search-tool
      </Typography>
      <TextField id="search-word" label="Search Word" variant="outlined"></TextField>
      <div>
        <ButtonGroup>
          <Button>Kills</Button>
          <Button>Losses</Button>
        </ButtonGroup>
      </div>
      <div>
        <Button>Solo</Button>
      </div>
      <ButtonGroup>
        <Button>Highsec</Button>
        <Button>Lowsec</Button>
        <Button>Nullsec</Button>
        <Button>W-Space</Button>
        <Button>Abyssal</Button>
      </ButtonGroup>
      <div>
        <Button>Finalblow</Button>
      </div>
      <ButtonGroup>
        <Button>5B+</Button>
        <Button>10B+</Button>
        <Button>20B+</Button>
      </ButtonGroup>
    </>
  )
}

export default SearchPage
