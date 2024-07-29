import { View, Text, ScrollView, Image, Platform  } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getPost, getAllPosts } from '../repository/postRepository';
import Markdown from 'react-native-markdown-display';
import Head from 'expo-router/head';
import { ORIGIN } from '../config';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
    const posts = getAllPosts();
    // Return an array of params to generate static HTML files for.
    // Each entry in the array will be a new page.
    return posts.map(post => ({ slug: post.slug }));
  }

const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams();
    const [post, setPost] = useState(getPost(slug));
    
if (!post) {
    return <Text>Sisältöä ei löytynyt!</Text>
}
    return(
        <>
    <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:image" content={`${ORIGIN}/thumbnails/${post.thumbnail}`}
        />
      </Head>
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
            <Image
            //source={{ uri: Platform.OS === 'web' ? `../../dist/thumbnails/${post.thumbnail}` : `../../dist/thumbnails/${post.thumbnail}` }}
            //source={{ uri: Platform.OS === 'web' ? `/dist/thumbnails/${post.thumbnail}` : `${ORIGIN}/dist/thumbnails/${post.thumbnail}` }}
            source={{ uri: `${ORIGIN}/thumbnails/${post.thumbnail}`}}
            //source={{ uri: `/dist/thumbnails/${post.thumbnail}`}}
            style={{ width: '50%', aspectRatio: 32 / 18 }}
            alt={post.title}
            />
            <Markdown>{post.content}</Markdown>
        </ScrollView>
        </>
    );
};

export default PostDetailsPage;