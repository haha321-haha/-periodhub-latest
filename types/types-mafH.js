// app/magic/[id]/page.js
import Link from 'next/link';

interface Charm {
  id: string;
  name: string;
  description: string;
}

// 模拟 API 数据源
const charms = {
  1: { name: 'Charm One', description: 'This is the first charm.' },
  2: { name: 'Charm Two', description: 'This is the second charm.' },
  3: { name: 'Charm Three', description: 'This is the third charm.' },
};

// 生成静态路由参数
export async function generateStaticParams() {
  const params = Object.keys(charms).map((id) => ({ id }));
  console.log('Generated static params:', params); // 调试日志
  return params;
}

// 动态路由页面组件
export default function Page({ params }: { params: { id: string } }) {
  // 将 params.id 转换为数字类型以匹配 charms 的键类型
  const charm = charms[Number(params.id)] || null;

  if (!charm) {
    return <div>404 - Charm Not Found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{charm.name}</h1>
      <p className="text-gray-600 mt-4">{charm.description}</p>
      <Link href="/magic" className="text-primary-600 hover:text-primary-700 mt-4 block">
        ← Back to Magic
      </Link>
    </div>
  );
}