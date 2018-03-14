import React, { PureComponent } from "react";
import Link from "next/link";

export default class extends PureComponent {
  render() {
    const { href, as, className, style, children, ...rest } = this.props;
    return (
      <Link href={href} as={as}>
        <a className={className} style={style} {...rest}>
          {children}
        </a>
      </Link>
    );
  }
}
