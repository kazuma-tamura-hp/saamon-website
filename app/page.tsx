import { redirect } from "next/navigation";

export default function RootPage() {
  // ここを "ja" にすれば日本語をデフォルトにもできる
  redirect("/en");
}
