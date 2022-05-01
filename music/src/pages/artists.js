import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import {Flex, Box, Link} from 'rebass'
import SEO from "../components/seo"

const Artists = () => (
  <Layout>
    <SEO title="Artists" />
    <h1 className="artists">Artists</h1>
    <Flex>
      <Box     
          p={3}
          width={1/3}
        color='red'>
            <Link className="artisttext" href="https://kornofficial.com/" color='red'>Korn</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://tour.ratm.com/" color='red'>Rage Against the Machine</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://www.godsmack.com/" color='red'>Godsmack</Link>
      </Box>
      </Flex>
      <Flex>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://megadeth.com/" color='red'>Megadeth</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://www.metallica.com/" color='red'>Metallica</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://redhotchilipeppers.com/" color='red'>Red Hot Chili Peppers</Link>
      </Box>
    </Flex>
    <Flex>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://open.spotify.com/artist/1HwM5zlC5qNWhJtM00yXzG" color='red'>DMX</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://jeweljk.com/" color='red'>Jewel</Link>
      </Box>
      <Box
          p={3}
          width={1/3}
           color='red'>
            <Link className="artisttext" href="https://moby.com/" color='red'>Moby</Link>
      </Box>
    </Flex>
  </Layout>
)

export default Artists
