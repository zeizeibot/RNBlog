import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { getPost } from '../repository/postRepository';

const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams();
    const [post, setPost] = useState(getPost(slug));
    
if (!post) {
    return <Text>Sisältöä ei löytynyt!</Text>
}
    return(
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

export default PostDetailsPage;