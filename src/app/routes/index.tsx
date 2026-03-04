import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/home/home-page";
import PlaylistOfAnime from "../../pages/playlists-animes/playlist-anime";
import FAQuQ from "../../pages/FAQ/info-faq";
import { TitleParams } from "../../pages/title-params-page/title-params";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const RoterProvidorAniflorsDemo = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animes" element={<PlaylistOfAnime />} />
        <Route path="/info" element={<FAQuQ />} />
        <Route path="/:code" element={<TitleParams />} />
      </Routes>
    </MantineProvider>
  );
};

export default RoterProvidorAniflorsDemo;

// import { Button, Menu } from '@mantine/core';

// function Demo() {
//   return (
//     <Menu width={200} position="bottom-start">
//       <Menu.Target>
//         <Button>Toggle Menu</Button>
//       </Menu.Target>

//       <Menu.Dropdown>
//         <Menu.Item>Dashboard</Menu.Item>

//         <Menu.Sub openDelay={120} closeDelay={150}>
//           <Menu.Sub.Target>
//             <Menu.Sub.Item>Products</Menu.Sub.Item>
//           </Menu.Sub.Target>

//           <Menu.Sub.Dropdown>
//             <Menu.Item>All products</Menu.Item>
//             <Menu.Item>Categories</Menu.Item>
//             <Menu.Item>Tags</Menu.Item>
//             <Menu.Item>Attributes</Menu.Item>
//             <Menu.Item>Shipping classes</Menu.Item>
//           </Menu.Sub.Dropdown>
//         </Menu.Sub>

//         <Menu.Sub>
//           <Menu.Sub.Target>
//             <Menu.Sub.Item>Orders</Menu.Sub.Item>
//           </Menu.Sub.Target>

//           <Menu.Sub.Dropdown>
//             <Menu.Item>Open</Menu.Item>
//             <Menu.Item>Completed</Menu.Item>
//             <Menu.Item>Cancelled</Menu.Item>
//           </Menu.Sub.Dropdown>
//         </Menu.Sub>

//         <Menu.Sub>
//           <Menu.Sub.Target>
//             <Menu.Sub.Item>Settings</Menu.Sub.Item>
//           </Menu.Sub.Target>

//           <Menu.Sub.Dropdown>
//             <Menu.Item>Profile</Menu.Item>
//             <Menu.Item>Security</Menu.Item>
//             <Menu.Item>Notifications</Menu.Item>
//           </Menu.Sub.Dropdown>
//         </Menu.Sub>
//       </Menu.Dropdown>
//     </Menu>
//   );
// }
