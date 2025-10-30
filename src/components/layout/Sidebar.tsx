'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import {
  MdDashboard,
  MdFolder,
  MdDescription,
  MdPeople,
  MdImage,
  MdMail,
  MdChat,
} from 'react-icons/md';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: MdDashboard,
    label: 'Bảng Điều Khiển',
    href: '/',
  },
  {
    icon: MdFolder,
    label: 'Quản Lý Dự Án',
    href: '/management/projects',
  },
  {
    icon: MdDescription,
    label: 'Quản Lý Tuyển Dụng',
    href: '/management/careers',
  },
  {
    icon: MdPeople,
    label: 'Quản Lý Liên Hệ',
    href: '/management/contacts',
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed left-0 top-0 z-50 h-full w-56 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">DUDISOFTWARE</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-3">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                    onClick={() => {
                      // Close mobile sidebar when clicking a link
                      if (window.innerWidth < 1024) {
                        onClose();
                      }
                    }}
                  >
                    <Icon
                      size={20}
                      className={clsx(
                        isActive ? 'text-blue-700' : 'text-gray-500'
                      )}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3">
            <div className="mb-2">
              <p className="text-xs font-medium text-gray-900">DUDISOFTWARE</p>
              <p className="text-xs text-gray-600">Build. Ship. Scale.</p>
            </div>
            <button className="w-full rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
              New Item
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
