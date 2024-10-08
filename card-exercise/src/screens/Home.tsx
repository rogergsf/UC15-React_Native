import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Card />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
});

export default Home;