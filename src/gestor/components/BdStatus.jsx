import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import { Tooltip, IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}));

export const BdStatus = () => {
    return (
        <Tooltip title="Congestion Media" sx={{ marginRight: "1em" }}>
            <Badge badgeContent="M" color="warning">
                <DnsRoundedIcon />
            </Badge>
        </Tooltip >
    )
}
