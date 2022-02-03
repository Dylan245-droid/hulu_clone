import {
    BadgeCheckIcon,
    HomeIcon,
    CollectionIcon,
    SearchIcon,
    LightningBoltIcon,
    UserIcon
} from "@heroicons/react/outline"

import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center sm:flex-row m-5 h-auto">

        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem  title='HOME' Icon={HomeIcon} />
            <HeaderItem  title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem  title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem  title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem  title='SEARCH' Icon={SearchIcon} />
            <HeaderItem  title='ACCOUNT' Icon={UserIcon} />
        </div>
    

        <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="logo"
        width={200}
        height={100}
        />
    </header>
  );
};

export default Header;
