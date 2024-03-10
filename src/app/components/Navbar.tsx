"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Link from "next/link";
import { Play } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from 'next/navigation'



const play = Play({
  subsets: ["cyrillic"],
  weight: ["700"],
  style: "normal",
});

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const Menu = [
    { route: "/", icon: <HomeIcon />, text: "Home" },
    { route: "/blog", icon: <FeedIcon />, text: "Blogs" },
    { route: "/contact", icon: <MailIcon />, text: "Reach Me" },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Menu.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <Link href={menuItem.route}>
                <ListItemText primary={menuItem.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="flex flex-row h-16 items-center lg:text-left text-cyan-200 bg-gradient-to-b from-slate-800 to-slate-600 px-2 lg:px-10 sticky">
      <div className="basis-1/4">
        <Button onClick={toggleDrawer(true)} className="p-0 m-0">
          <MenuSharpIcon></MenuSharpIcon>
        </Button>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
        >
          {DrawerList}
        </Drawer>
      </div>
      <div className="flex basis-1/2 justify-center h-16 items-center">
        {/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold w-3"> */}
        SOURAV BHUNIA
        {/* </h1> */}
      </div>
      <div className="flex justify-end basis-1/4 h-4 items-center m-4">
        <Avatar>
          <Link href={"/admin/login"}>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Link>
        </Avatar>
      </div>
    </div>
  );
}
