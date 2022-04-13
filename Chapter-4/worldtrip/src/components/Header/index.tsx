import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header(){
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/'

  return(
    <Flex
      as='header'
      bg='white'
      w='100%'
      mx='auto'
      px='1rem'
      h={['50px', '100px']}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxW='1660px'
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      >
        { notHomePage && (
          <Link href='/'>
            <a><Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf='start' /></a>
          </Link>
        )}
        <Image
          w={['81px', '184px']}
          src='/logo.svg'
          alt='Um avião voando sobre o nome da marca World Trip'
          justifySelf='center'
          gridColumn='2'
        ></Image>

      </Grid>
    </Flex>
  )
}