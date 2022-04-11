import Icon from "@chakra-ui/icon"
import {
  Box,
  Center,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import {
  AccessibilityIcon,
  ArrowRightIcon,
  CheckIcon,
  FrameworkAgnosticIcon,
  PlayIcon,
  ReactIcon,
  SolidIcon,
  StatechartIcon,
  VueIcon,
} from "components/icons"
import { Illustration } from "components/illustration"
import { ElementType } from "react"
import { TopNavigation } from "components/top-navigation"
import Link from "next/link"
import { useMDX } from "components/mdx-components"
import { getSnippetDoc } from "lib/get-paths"
import { MultiframeworkTabs } from "components/mutli-framework"
import { NextSeo } from "next-seo"
import siteConfig from "site.config"
import { CodeArea } from "components/code-area"

type FeatureItemProps = {
  title: string
  icon: ElementType
  children: string
}

function FeatureItem(props: FeatureItemProps) {
  const { title, children, icon } = props
  return (
    <Box fontSize="lg">
      <Icon as={icon} fontSize="6xl" />
      <Box mt="4">
        <Text fontWeight="bold">{title}</Text>
        <Text mt={2}>{children}</Text>
      </Box>
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <NextSeo title={siteConfig.title} />

      <TopNavigation />

      <Box as="header" position="relative">
        <Box layerStyle="contain">
          <Box pos="relative" maxW="4xl" pt={{ base: "16", md: "24" }}>
            <chakra.h1 textStyle="display.2xl">
              UI components powered by Finite State Machines
            </chakra.h1>
            <chakra.p
              textStyle="text.xl"
              maxW="xl"
              mt="6"
              sx={{ mark: { color: "green.500", fontWeight: "semibold" } }}
            >
              A collection of framework-agnostic UI component patterns like{" "}
              <mark>accordion</mark>, <mark>menu</mark>, and <mark>dialog</mark>{" "}
              that can be used to build design systems for React, Vue and
              Solid.js
            </chakra.p>
          </Box>

          <chakra.svg
            display={{ base: "none", md: "initial" }}
            as={Illustration}
            pos="absolute"
            bottom="0"
            right="0"
            width="min(50%,48vw)"
            height="auto"
          />

          <Stack
            direction={{ base: "column", sm: "row" }}
            mt="8"
            mb="12"
            spacing="5"
          >
            <Link href="/overview/introduction" passHref>
              <Button as="a" variant="green">
                <HStack spacing="6">
                  <span>Get Started</span>
                  <Icon as={ArrowRightIcon} />
                </HStack>
              </Button>
            </Link>
            <Button>
              <HStack spacing="2">
                <Icon as={PlayIcon} />
                <span>Watch Demo</span>
              </HStack>
            </Button>
          </Stack>

          <HStack spacing="12">
            <ReactIcon />
            <VueIcon />
            <SolidIcon />
          </HStack>
        </Box>
      </Box>

      <Box
        as="section"
        bg={{ base: "green.100", md: "unset" }}
        layerStyle="contain"
        my={{ base: "20", md: "32" }}
      >
        <Box bg="green.100" px={{ md: "20" }} py={{ base: "10", md: "20" }}>
          <chakra.h2 textStyle="display.xl" mb="8" maxW="24ch">
            Zag provides the component API for the Web.
          </chakra.h2>

          <Link href="/overview/introduction" passHref>
            <Button as="a" variant="black" width={{ base: "full", md: "auto" }}>
              Get Started
            </Button>
          </Link>

          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "8", lg: "20" }}
            mt="12"
          >
            <FeatureItem icon={StatechartIcon} title="Powered by Statecharts">
              Simple, resilient component logic. Write component logic once and
              use anywhere.
            </FeatureItem>
            <FeatureItem icon={AccessibilityIcon} title="Accessible">
              Built-in adapters that connects machine output to DOM semantics in
              a WAI-ARIA compliant way.
            </FeatureItem>
            <FeatureItem
              icon={FrameworkAgnosticIcon}
              title="Framework agnostic"
            >
              Component logic is largely JavaScript code and can be consumed in
              any JS framework.
            </FeatureItem>
          </Stack>
        </Box>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1">
            <chakra.h2 mb="8" maxW="24ch" textStyle="display.xl">
              Machines handle the logic. You handle the UI
            </chakra.h2>
            <chakra.p maxW="64ch" fontSize="lg">
              Zag machine APIs are completely headless and unstyled. Use your
              favorite styling solution and get it matching your design system.
            </chakra.p>

            <List spacing="5" mt="8" fontSize="lg">
              {[
                "Install the machine you need",
                "Consume the machine",
                "Connect machine to your UI",
              ].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon fontSize="3xl" mr="2" as={CheckIcon} />
                  <span>{item}</span>
                </ListItem>
              ))}
            </List>
          </Box>

          <Center
            position="relative"
            width="full"
            maxW={{ xl: "800px" }}
            minHeight="500px"
          >
            <Box
              width="full"
              mx="auto"
              height="84%"
              position="absolute"
              bg="green.400"
              rounded="2xl"
            />
            <Box
              width={{ base: "full", xl: "max(640px,80%)" }}
              mx="auto"
              bg="white"
              rounded="2xl"
              shadow="base"
              height="full"
              position="relative"
            >
              <CodeArea slug="website/snippet" />
            </Box>
          </Center>
        </Flex>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Box mb="10">
          <chakra.h2 maxW={{ md: "24ch" }} textStyle="display.xl">
            Work in your favorite JSX framework
          </chakra.h2>
          <chakra.p textStyle="text.lg" maxW="560px" mt="6">
            Finite state machines for building accessible design systems and UI
            components. Works with React, Vue and Solid.
          </chakra.p>
        </Box>

        <MultiframeworkTabs />
      </Box>
    </Box>
  )
}
