import { Link } from "react-router-dom";
import { useState } from "react";
import { HEADER_ITEMS } from "../lib/header.const";
import { Modal } from "../../../../shared/ui/modal/modal";
import { ExploreIcon } from "../../../../shared/data/svg/explore/explore";
import { BellSvg } from "../../../../shared/data/svg/bell/bell";
import { LikeSvg } from "../../../../shared/data/svg/likes/likes";
import { Menu } from "@mantine/core";
import { Demo } from "../../../../entities/modal-input/modal-input";

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-between gap-2 md:gap-4 px-2 md:px-4 lg:px-8 py-4 z-10 relative max-w-full overflow-hidden">
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 min-w-0">
          {HEADER_ITEMS.map((item, index) => (
            <div key={index}>
              <Link
                to={item.link}
                className="text-sm md:text-2xl lg:text-3xl text-white hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-3 lg:gap-4 shrink-0">
          <Demo />

          <button
            onClick={() => setIsSearchModalOpen(true)}
            className="bg-neutral-700 w-9 h-9 flex justify-center cursor-pointer items-center rounded-full md:hidden text-white hover:opacity-80 transition-opacity"
            aria-label="Поиск"
          >
            <ExploreIcon />
          </button>

          <div className="w-9 h-9 rounded-full bg-neutral-700 cursor-pointer flex items-center justify-center">
            <LikeSvg />
          </div>
          <div className="hidden md:block">
            <div className="w-9 h-9 rounded-full bg-neutral-700 cursor-pointer flex items-center justify-center">
              <BellSvg />
            </div>
          </div>

          <Menu
            width={200}
            position="bottom-start"
            classNames={{
              dropdown: "custom-menu-dropdown",
              item: "custom-menu-item",
            }}
          >
            <Menu.Target>
              <div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-fuchsia-500 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
                <img src="kura.jpg" className="rounded-full w-11 h-11" alt="" />
              </div>
            </Menu.Target>
            <Menu.Dropdown style={{ opacity: "80%" }}>
              <Menu.Item>Профиль</Menu.Item>
              <Menu.Item>Премиум</Menu.Item>
              <Menu.Item>Коллекции</Menu.Item>
              <Menu.Item>Каталог</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </header>

      <Modal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      >
        <div className="w-full">
          <h2 className="text-white text-xl font-semibold mb-4">Поиск</h2>
          <input
            className="bg-neutral-800 rounded-2xl text-white font-semibold px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-neutral-600"
            type="text"
            placeholder="Начать поиск"
            autoFocus
          />
        </div>
      </Modal>
    </>
  );
};

export default Header;
