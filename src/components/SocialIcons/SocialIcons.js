import React from "react";
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";
import { Twitter } from "../Icons/Twitter";

import { SocialIconsStyled, SocialIconsLink} from "./SocialIcons.styled";

const SocialIcons = () => (
  <SocialIconsStyled>
    <SocialIconsLink href="#" rel="noopener nofollow">
      <Facebook />
    </SocialIconsLink>
    <SocialIconsLink href="#" rel="noopener nofollow">
      <Twitter />
    </SocialIconsLink>
    <SocialIconsLink href="#" rel="noopener nofollow">
      <Instagram />
    </SocialIconsLink>
  </SocialIconsStyled>
);

export default SocialIcons;