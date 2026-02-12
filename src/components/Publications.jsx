const articles = [
  {
    topic: 'Combine',
    title: 'Demystifying Debounce and Throttle in Combine Framework',
    excerpt: 'A practical breakdown of how debounce and throttle work in Apple\'s Combine framework for reactive iOS development.',
    url: 'https://medium.com/@manikantasirumalla5/demystifying-debounce-and-throttle-in-combine-framework-75539c87b15e',
  },
  {
    topic: 'SwiftData',
    title: 'Exploring SwiftData: Enhancing Data Management in iOS Applications',
    excerpt: 'Dive into Apple\'s SwiftData framework and how it simplifies persistence in modern iOS apps.',
    url: 'https://medium.com/@manikantasirumalla5/exploring-swiftdata-enhancing-data-management-in-ios-applications-5e20dfa7d749',
  },
  {
    topic: 'SwiftUI',
    title: 'How to Implement Native Volume Controls and AirPlay Button in SwiftUI',
    excerpt: 'Step-by-step guide to integrating system volume controls and AirPlay into your SwiftUI views.',
    url: 'https://medium.com/@manikantasirumalla5/how-to-implement-native-volume-controls-and-airplay-button-in-swiftui-eaa04000b76f',
  },
  {
    topic: 'Localization',
    title: 'A Guide to Localizing Your iOS Applications',
    excerpt: 'Everything you need to know about making your iOS app speak multiple languages and adapt to regions.',
    url: 'https://medium.com/@manikantasirumalla5/a-guide-to-localizing-your-ios-app-3d96d49d8c37',
  },
  {
    topic: 'Monetization',
    title: 'Google Banner Ads in iOS Apps',
    excerpt: 'How to integrate Google AdMob banner ads into your iOS project cleanly and effectively.',
    url: 'https://medium.com/@manikantasirumalla5/a-step-by-step-guide-to-implementing-google-admob-banner-ads-in-your-ios-app-8ecb9106ec7b',
  },
  {
    topic: 'Frameworks',
    title: 'Creating Custom iOS Frameworks',
    excerpt: 'Build reusable, modular frameworks to share code across your iOS projects and teams.',
    url: 'https://medium.com/@manikantasirumalla5/creating-custom-ios-framework-2dc6e963e557',
  },
];

export default function Publications() {
  return (
    <section className="section" id="writing" style={{ background: 'var(--bg-elevated)' }}>
      <div className="section-inner">
        <p className="section-eyebrow reveal">Publications</p>
        <h2 className="section-heading reveal d1">Writing on Medium.</h2>
        <div className="blog-list">
          {articles.map((article, i) => (
            <a
              className={`blog-entry reveal d${Math.min(i + 2, 5)}`}
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <div className="blog-topic">{article.topic}</div>
                <div className="blog-title">{article.title}</div>
                <div className="blog-excerpt">{article.excerpt}</div>
              </div>
              <span className="blog-arrow">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
