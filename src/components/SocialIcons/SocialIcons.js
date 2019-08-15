import React from "react";
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";
import { Twitter } from "../Icons/Twitter";

import { SocialIconsStyled, SocialIconsLink} from "./SocialIcons.styled";

const SocialIcons = () => (
  <SocialIconsStyled>
    <SocialIconsLink href="#">
      <Facebook />
    </SocialIconsLink>
    <SocialIconsLink href="#">
      <Twitter />
    </SocialIconsLink>
    <SocialIconsLink href="#">
      <Instagram />
    </SocialIconsLink>
  </SocialIconsStyled>
);

export default SocialIcons;