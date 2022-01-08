import React, { VFC } from "react";
import { Icon } from "@chakra-ui/react"

import short from "~images/short.inline.svg"
import medium from "~images/medium.inline.svg"
import long from "~images/long.inline.svg"

type Length = "short" | "medium" | "long"

type LengthIconProps = {
    length: Length
}

const getIcon = (length: Length) => {
    switch (length) {
        case "short":
            return short
        case "medium":
            return medium
        case "long":
            return long
    }
}

export const LengthIcon: VFC<LengthIconProps> = ({ length }) => {
    return <Icon mb="-1" as={getIcon(length)} />
}