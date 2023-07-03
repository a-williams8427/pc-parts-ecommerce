import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

function Sidebar({
    window,
    sidebarWidth,
    mobileOpen,
    handleSidebarToggle,
    categories,
    filterProducts,
    resetFilter,
}) {
    const container =
        window !== undefined ? () => window().document.body : undefined;

    const sidebar = (
        <List sx={{ paddingTop: "75px" }}>
            <ListItem>
                <ListItemButton onClick={() => resetFilter()}>
                    <ListItemText primary="All" />
                </ListItemButton>
            </ListItem>
            {categories.map((category) => (
                <ListItem key={category.id}>
                    <ListItemButton
                        onClick={() => filterProducts(category.name)}
                    >
                        <ListItemText primary={category.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        <Box
            sx={{
                width: { sm: sidebarWidth },
                flexShrink: { sm: 0 },
            }}
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleSidebarToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: sidebarWidth,
                    },
                }}
            >
                {sidebar}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        boxSizing: "border-box",
                        width: sidebarWidth,
                    },
                }}
                open
            >
                {sidebar}
            </Drawer>
        </Box>
    );
}

export default Sidebar;
