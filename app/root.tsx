import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    keywords: "флэш карточки, английский язык, сервис, изучить, english, flash cards",
    description: "Английские карточки для изучение слов. Английские слова по темам, создание " +
        "своих тематических наборов. Упражнения для эффективного запоминания новых слов" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>English cards</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
