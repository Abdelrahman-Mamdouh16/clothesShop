import { XCircleIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ setSearchBarOn, searchBarOn, setSearchValue, SearchValue }) {

    console.log(SearchValue);

    return (
        <div className="bg-secondary/10 dark:bg-primary/20 py-5 flex justify-center items-center">
            <div className="relative w-6/12">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-body"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="search"
                    className=" w-full p-3 ps-9  text-sm shadow-xs  rounded-full border-secondary"
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={SearchValue} />

            </div>

            <XCircleIcon className=" w-6 ms-5 cursor-pointer" onClick={() => { setSearchBarOn(!searchBarOn); setSearchValue("") }} />
        </div>
    )
}
