import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getPost } from '../repository/postRepository';
import Markdown from 'react-native-markdown-display';

const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams();
    const [post, setPost] = useState(getPost(slug));
    
if (!post) {
    return <Text>Sisältöä ei löytynyt!</Text>
}
    return(
        <ScrollView style={{
            flex: 1,
            backgroundColor: 'white',

        }}
        contentContainerStyle={{
            maxWidth: 960,
            width: '100%',
            marginHorizontal: 'auto',
            padding: 20,
        }}
        >
            <Text style={{ fontSize: 30, marginBottom: 20  }}>{post.title}</Text>

            <Markdown>{post.content}</Markdown>

            <Text>{post.content}</Text>
        </ScrollView>
    )
}

export default PostDetailsPage;