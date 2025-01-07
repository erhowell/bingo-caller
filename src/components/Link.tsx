"use client";

import React from "react";
import * as NextLink from "next/link";
import { useState, useEffect } from "react";
import { styled } from "styled-system/jsx";

export type TrackableLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  children?: any;
  href?: string;
  // Prefetch can only be false or undefined, prefetch={true} is deprecated.
  prefetch?: false;
  replace?: boolean;
};

const StyledNextLink = React.forwardRef<HTMLAnchorElement, TrackableLinkProps>(
  ({ href, prefetch, replace, ...rest }, ref) => {
    return (
      <NextLink.default
        href={href}
        ref={ref}
        prefetch={false}
        replace={replace}
        legacyBehavior
        passHref
      >
        <a {...rest} />
      </NextLink.default>
    );
  }
);
const Link = styled(StyledNextLink);

export default Link;
