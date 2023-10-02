import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release date" },
      { value: "-metaclinic", label: "Popularity" },
      { value: "-rating", label: "Average rating" },
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <div>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >Order By: {currentSortOrder?.label || "Relevance"}</MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder => <MenuItem onClick={() => onSelectSortOrder(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>{sortOrder.label}</MenuItem>)}
            </MenuList>
          </Menu>
        </div>
      )
}

export default SortSelector
