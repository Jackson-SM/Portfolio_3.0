import {
  ChatBubbleIcon,
  GearIcon,
  MixIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import * as Styles from "./styles";

export const SoftSkillsList = () => {
  return (
    <Styles.SoftSkillsList>
      <Styles.SoftSkillsListItem>
        <Styles.SoftSkillsListItemIcon
          css={{
            "&::before": {
              height: "20px",
            },
          }}
        >
          <ChatBubbleIcon width={25} height={25} />
        </Styles.SoftSkillsListItemIcon>
        <Text as="span">Comunicação</Text>
      </Styles.SoftSkillsListItem>
      <Styles.SoftSkillsListItem>
        <Styles.SoftSkillsListItemIcon
          css={{
            "&::before": {
              height: "20px",
            },
          }}
        >
          <GearIcon width={25} height={25} />
        </Styles.SoftSkillsListItemIcon>
        <Text as="span">Resolução de Problemas</Text>
      </Styles.SoftSkillsListItem>
      <Styles.SoftSkillsListItem>
        <Styles.SoftSkillsListItemIcon
          css={{
            "&::before": {
              height: "20px",
            },
          }}
        >
          <PersonIcon width={25} height={25} />
        </Styles.SoftSkillsListItemIcon>
        <Text as="span">Trabalho em Equipe</Text>
      </Styles.SoftSkillsListItem>
      <Styles.SoftSkillsListItem>
        <Styles.SoftSkillsListItemIcon>
          <MixIcon width={25} height={25} />
        </Styles.SoftSkillsListItemIcon>
        <Text as="span">Adaptabilidade</Text>
      </Styles.SoftSkillsListItem>
    </Styles.SoftSkillsList>
  );
};

/*

<li>
        <div>
          <GearIcon />
        </div>
        <Text as="span">Resolução de Problemas</Text>
      </li>
      <li>
        <div>
          <PersonIcon />
        </div>
        <Text as="span">Trabalho em Equipe</Text>
      </li>
      <li>
        <div>
          <MixIcon />
        </div>
        <Text as="span">Adaptabilidade</Text>
      </li>
*/
