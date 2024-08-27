import { User } from "@/app/_redux/features/authApiSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import { LuPencilLine } from "react-icons/lu";
import Modal from "../ui/Modal";
import EditDescModal from "./EditDescModal";

interface NameTagProps {
  user: User | undefined;
}

export default function NameTag({ user }: NameTagProps) {
  return (
    <div className="pt-28">
      <h2 className=" font-semibold text-3xl text-center">
        {user?.first_name} {user?.last_name}
      </h2>
      <div className="px-10 flex justify-center items-center mt-5">
        <Modal>
          <Modal.Open opens="editdesc">
            <button className="py-4 text-center flex gap-2 group">
              <p className="text-lg font-medium flex justify-center items-center w-full mx-auto">
                {user?.short_description.length === 0
                  ? "Edytuj swój biogram"
                  : user?.short_description}
              </p>
              <span className="p-1 rounded-md group-hover:bg-whiteSecond transition-colors duration-300">
                <LuPencilLine size={20} />
              </span>
            </button>
          </Modal.Open>
          <Modal.Window name="editdesc">
            <EditDescModal
              type="short"
              onCloseModal={undefined as never}
              user={user}
            />
          </Modal.Window>
        </Modal>
      </div>
      <p className="flex justify-center items-center gap-2 text-stone-400 mt-3">
        {user?.sex} <span className="h-1 w-1 bg-stone-300 rounded-full" />{" "}
        {user?.email}
      </p>
      <p className="text-center mt-5">
        <span className="font-semibold">{user?.follower_count}</span> obserwacji
      </p>
      <div className="w-full flex justify-center items-center gap-3 mt-5">
        <Link
          href="/app/account"
          className="border border-stone-300 rounded-md px-4 py-2"
        >
          Konto
        </Link>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_APP_LINK}/creators/${user?.id}`
            );
            toast.success("Link profilu został skopiowany do schowka");
          }}
          className="bg-mainGreen text-white hover:bg-mainGreenSecond transition-colors duration-300 rounded-md px-4 py-2"
        >
          Udostępnij
        </button>
      </div>
    </div>
  );
}
