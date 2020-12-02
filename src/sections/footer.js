import { Box, Text, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Container from "../components/container";

const Socials = ({ imagePath, href }) => {
	return (
		<ChakraLink href={href}>
			<Image
				transition=".3s ease-out"
				_hover={{ transform: "scale(1.2)" }}
				mr=".7rem"
				cursor="pointer"
				src={imagePath}
			/>
		</ChakraLink>
	);
};

const FooterLink = ({ href, children }) => {
	return (
		<ChakraLink href={href} d="block" mb=".5rem" color="brand.footerGrey">
			{children}
		</ChakraLink>
	);
};

const footer = () => {
	return (
		<Box
			pt="3rem"
			pb="2rem"
			mt={{ base: 0, md: "4rem" }}
			backgroundColor="#F9F9FB;"
			as="footer"
		>
			<Container>
				<Flex
					borderBottom="1px solid #c4c4c4"
					pb="3rem"
					mb="2.5rem"
					justify="space-between"
					flexDir={{ base: "column", md: "row" }}
					gridRowGap="2rem"
				>
					<Box flex="1.3">
						<Box width="75%">
							<ChakraLink href="#!">
								<Image
									mb="1.5rem"
									src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/brand_logo.png"
								/>
							</ChakraLink>
							<Text mb="2.5rem" color="brand.footerGrey">
								Plan and book your perfect trip with expert advice, travel tips
								destination information from us
							</Text>
							<Text color="brand.footerGrey">
								©2020 Thousand Sunny. All rights reserved
							</Text>
						</Box>
					</Box>

					<Box flex=".7">
						<Text mb="1.5rem" fontWeight="bold">
							Destinations
						</Text>
						<FooterLink href="#!">Africa</FooterLink>
						<FooterLink href="#!">Antartica</FooterLink>
						<FooterLink href="#!">Asia</FooterLink>
						<FooterLink href="#!">Europe</FooterLink>
						<FooterLink href="#!">America</FooterLink>
					</Box>

					<Box flex=".7">
						<Text mb="1.5rem" fontWeight="bold">
							Shop
						</Text>
						<FooterLink href="#!">Destination Guides</FooterLink>
						<FooterLink href="#!">Pictorial and Gifts</FooterLink>
						<FooterLink href="#!">Special Offers</FooterLink>
						<FooterLink href="#!">Delivery Times</FooterLink>
						<FooterLink href="#!">FAQs</FooterLink>
					</Box>
					<Box flex=".7">
						<Text mb="1.5rem" fontWeight="bold">
							Interests
						</Text>
						<FooterLink href="#!">Adventure Travel</FooterLink>
						<FooterLink href="#!">Arts and Culture</FooterLink>
						<FooterLink href="#!">Wildlife and Nature</FooterLink>
						<FooterLink href="#!">Family Holidays</FooterLink>
						<FooterLink href="#!">Food and Drink</FooterLink>
					</Box>
				</Flex>
				<Flex justify="center" align="center">
					<Socials
						href="#!"
						imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/twitter.svg"
					/>
					<Socials
						href="#!"
						imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/facebook.svg"
					/>
					<Socials
						href="#!"
						imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/instagram.svg"
					/>
					<Socials
						href="#!"
						imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/linkedin.svg"
					/>
					<Socials
						href="#!"
						imagePath="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/youtube.svg"
					/>
				</Flex>
			</Container>
		</Box>
	);
};

export default footer;
