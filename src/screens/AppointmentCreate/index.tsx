import React, { useState } from 'react'
import { KeyboardAvoidingView, Modal, Platform, ScrollView, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import Button from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'
import { GuildProps } from '../../components/Guild'
import { GuildIcon } from '../../components/GuildIcon'
import { Background } from '../../components/Background'

export const AppointmentCreate = () => {
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleToggleGuildModal() {
        setOpenGuildsModal(prev => !prev);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        handleToggleGuildModal();
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Background>
                <Header title="Agendar partida" />

                <ScrollView>
                    <Text
                        style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 16 }]}
                    >
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckbox
                        handleCategorySelect={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleToggleGuildModal}>
                            <View style={styles.select}>
                                {guild.icon
                                    ? <GuildIcon />
                                    : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>{guild.name ? guild.name : 'Selecione um servidor'}</Text>
                                </View>

                                <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>{'/'}</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Horário</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>{':'}</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.charactersLimit}>Max 100 caracteres</Text>
                        </View>

                        <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleToggleGuildModal}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}
