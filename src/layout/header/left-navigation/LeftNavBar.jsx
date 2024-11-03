import { Box } from "@mui/material";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import ROUTES from "../../../routes/routesModel";
import NavBarItem from "../../../routes/NavBarItem";
import { useCurrentUser } from "../../../user/providers/UserProvider";

export default function LeftNavBar() {
    const user = useCurrentUser();
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavBarItem to={ROUTES.YARNS} label={"Yarns"} />
            <NavBarItem to={ROUTES.ABOUT} label={"About"} />
            {user?.user?._id && !user?.user?.isAdmin && <NavBarItem to={ROUTES.MY_CART} label={"Cart"} />}
            {user?.user?._id && !user?.user?.isAdmin && <NavBarItem to={ROUTES.MY_ORDERS} label={"Orders"} />}
            {user?.user?._id && user?.user?.isAdmin && <NavBarItem to={ROUTES.STOCKS} label={"Stocks"} />}

        </Box>
    );
}
