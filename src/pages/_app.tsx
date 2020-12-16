import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import {useMedia} from "utils/use-media";
import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
const AppLayout = dynamic(() => import('components/Layout'));

export default function ExtendedApp({ Component, pageProps }) {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');

    return (
        <AppLayout>
            {/*<Component
                {...pageProps}
                deviceType={{ mobile, tablet, desktop }}
            />*/}
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </AppLayout>
    )
}