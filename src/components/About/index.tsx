import { AboutMe } from "./style";
import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";


export const About = (): JSX.Element => {
    return (
      <AboutMe id="about-me">
        <Container>
          <Flex>
            <UserImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"70px"}
              height={"70px"}
            />
            <Box css={{ marginLeft: "$2" }}>
              <Text type="heading4" color="grey5" css={{ marginBottom: "$2", textAlign: "center" }}>
                Quer saber um pouco sobre mim? {/* <HandEffect /> */}
              </Text>
              <Text type="body1" color="grey2" css={{textAlign: "center" }}>
                Costumava me aventurar na área da saúde começando com uma faculdade de biomedicina, não durou muito tempo até eu notar que meu olhar atrativo era mais voltado para tecnologia. Desde então comecei a estudar e me interessar sobre programação, quando mais novo gostava de fazer desenhos que por ventura se tornou um hobbie, e o desenvolvimento web me despertou ainda mais essa minha paixão pela criatividade, espero que com essa minha qualidade possamos criar soluções para os seus problemas!
              </Text>
            </Box>
          </Flex>
          <Flex
            css={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "$2",
            }}
          >
          </Flex>
        </Container>
      </AboutMe>
    );
  };
  