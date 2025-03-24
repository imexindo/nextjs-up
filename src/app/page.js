import Link from "next/link";

export default function Home() {
  return (
    <div className="index-page">
      <h1>NEXTJS</h1>
      <a href="/about" style={{ textDecoration: 'none', color: 'blue' }}>Tentang Kami</a>
    </div>
  );
}
