import React from 'react'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import { Category } from '../Category'
import { styles } from './styles'

type Props = {
    categorySelected: string
    handleCategorySelect: (categoryId: string) => void
    hasCheckbox?: boolean
}

export const CategorySelect = ({ categorySelected, handleCategorySelect, hasCheckbox = false }: Props) => {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map(category => (
                <Category key={category.id} hasCheckbox={hasCheckbox} onPress={() => handleCategorySelect(category.id)} title={category.title} icon={category.icon} checked={category.id === categorySelected} />
            ))}
        </ScrollView>
    )
}
