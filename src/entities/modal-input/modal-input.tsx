import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { InputForm } from "../utils/input/input-form";
import { searchAnimes } from "../../shared/store/search-store/search-api-store";
import { observer } from "mobx-react-lite";
import { AniCard } from "../../features/anime-card/anime-card";

export const Demo = observer(() => {
  const [opened, { open, close }] = useDisclosure(false);
  const { items, query } = searchAnimes;

  return (
    <>
      <Modal
        size={"55rem"}
        opened={opened}
        onClose={close}
        title={<InputForm />}
        styles={{
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: "#111",
            width: "55rem",
            maxWidth: "55rem",
          },
          header: {
            backgroundColor: "#111",
            borderBottom: "1px solid #333",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          },
          title: {
            color: "white",
            backgroundColor: "#111",
            flex: 1,
            minWidth: 0,
          },
          body: {
            backgroundColor: "#111",
            color: "white",
            maxHeight: "70vh",
            overflowY: "auto",
          },
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.length > 0 ? (
            items.map((item) => <AniCard key={item.id} item={item} />)
          ) : query ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              Ничего не найдено
            </div>
          ) : (
            <div className="col-span-full text-center text-gray-400 py-8">
              Введите запрос для поиска
            </div>
          )}
        </div>
      </Modal>

      <div
        onClick={open}
        className="flex items-center gap-1 md:gap-3 lg:gap-4 shrink-0"
      >
        <div className="hidden md:block">
          <input
            className="bg-neutral-800 opacity-70 rounded-2xl text-white font-semibold px-4 py-2 w-48 lg:w-96 focus:outline-none"
            type="text"
            placeholder="Начать поиск"
          />
        </div>
      </div>
    </>
  );
});
