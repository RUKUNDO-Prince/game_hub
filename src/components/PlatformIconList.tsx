import React from "react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation5: FaPlaystation,
        playstation4: FaPlaystation,
        playstation3: FaPlaystation,
        xbox360: FaXbox,
        "xbox-series-x": FaXbox,
        "xbox-one": FaXbox,
        nintendo: SiNintendo,
        macos: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text key={platform.id}>{platform.name}</Text>
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
