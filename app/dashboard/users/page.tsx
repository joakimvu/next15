import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1>Dashboard Users</h1>
            <ul>
                <li>
                    <Link href="/dashboard/users/1">
                        User 1
                    </Link>
                    <Link href="/dashboard/users/1">
                        User 1
                    </Link>
                    <Link href="/dashboard/users/1">
                        User 1
                    </Link>

                </li>

            </ul>
        </div>
    );
};

export default Page;