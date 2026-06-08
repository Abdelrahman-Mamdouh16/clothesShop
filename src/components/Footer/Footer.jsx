import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container mx-auto mt-auto">
            <div className="mb-5">
                <div class="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                    <div>
                        < h1 class="text-2xl font-bold mb-5">Veloura</h1>
                        <p class="w-full md:w-2/3 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><div><p class="text-xl font-medium mb-5">
                            COMPANY
                        </p>
                        <ul class="flex flex-col gap-1 text-gray-600">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Collection">Collection</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-xl font-medium mb-5">GET IN TOUCH</p><ul class="flex flex-col gap-1 text-gray-600">
                            <li>+1-212-456-7890</li>
                            <li>contact@foreveryou.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center mt-5 text-xs">
                <p>Copyright2026 &copy;  Veloura. All rights reserved.</p>
            </div>
        </div>
    )
}
