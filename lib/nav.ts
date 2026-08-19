export function isActiveNavLink(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
