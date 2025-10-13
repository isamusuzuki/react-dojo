import { NavLink, Outlet } from 'react-router';

export default function App2() {
    return (
        <>
            <ul className="m-3 p-2">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        トップ
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/article"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        公開記事
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        このサイトについて
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}
