// components/ResponsiveTable.tsx
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image
import { LinkItem } from '@/types/LinkItem';

interface ResponsiveTableProps {
  data: LinkItem[];
}

export default function ResponsiveTable({ data }: ResponsiveTableProps) {
  const rows = [data.slice(0, 3), data.slice(3, 6)];

  return (

      <table className="hidden w-full table-auto border-collapse text-left md:table">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item) => (
                <td key={item.id}
                  className="rounded-lg  p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={item.link} className="block text-center">
                    <img src={item.imageSrc}
                      alt={item.label}
                      width={50}
                      height={30}
                      className="mx-auto"
                    />
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

  );
}
