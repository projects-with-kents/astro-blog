import { collection, config, fields, singleton } from '@keystatic/core';


const storage = {
    kind: 'github' as const,
    repo: {
        owner: 'projects-with-kents',
        name: 'astro-blog',
    }
} as const;

const optionalText = (label: string, multiline = false, description?: string) =>
  fields.text({
    label,
    multiline,
    description,
    validation: { isRequired: false },
  });

const requiredText = (label: string, multiline = false, description?: string) =>
  fields.text({
    label,
    multiline,
    description,
    validation: { isRequired: true },
  });

const optionalImage = (label: string) =>
  fields.image({
    label,
    directory: 'public/assets',
    publicPath: '/assets/',
    validation: { isRequired: false },
  });

const requiredImage = (label: string) =>
  fields.image({
    label,
    directory: 'public/assets',
    publicPath: '/assets/',
    validation: { isRequired: true },
  });

const optionalCta = (label: string) =>
  fields.object(
    {
      label: optionalText('Label'),
      href: optionalText('URL'),
    },
    { label }
  );

const sectionsField = fields.blocks(
  {
    hero: {
      label: 'Hero',
      itemLabel: () => 'Hero',
      schema: fields.object({
        image: optionalImage('Background image'),
        imageAlt: optionalText('Image alt'),
        badge: optionalText('Badge'),
        heading: requiredText('Heading'),
        subheading: requiredText('Subheading', true),
        cta: fields.object(
          {
            label: requiredText('Label'),
            href: requiredText('URL'),
          },
          { label: 'Button' }
        ),
      }),
    },
    services: {
      label: 'Services Grid',
      itemLabel: () => 'Services',
      schema: fields.object({
        heading: requiredText('Heading'),
        subheading: requiredText('Subheading', true),
        items: fields.array(
          fields.object({
            icon: optionalImage('Icon'),
            title: requiredText('Title'),
            description: requiredText('Description', true),
            href: requiredText('URL'),
          }),
          {
            label: 'Services',
            itemLabel: (props) => props.fields.title.value || 'Service',
          }
        ),
      }),
    },
    feature: {
      label: 'Feature Section',
      itemLabel: () => 'Feature',
      schema: fields.object({
        layout: fields.select({
          label: 'Layout',
          options: [
            { label: 'Image left', value: 'image-left' },
            { label: 'Image right', value: 'image-right' },
            { label: 'No image', value: 'no-image' },
          ],
          defaultValue: 'image-left',
        }),
        image: optionalImage('Image'),
        imageAlt: optionalText('Image alt'),
        heading: requiredText('Heading'),
        body: requiredText('Body', true),
        features: fields.array(
          fields.object({
            bulletIcon: optionalImage('Bullet icon'),
            text: requiredText('Text'),
          }),
          {
            label: 'Feature list',
            itemLabel: (props) => props.fields.text.value || 'Feature',
          }
        ),
        ctaPrimary: optionalCta('Primary button'),
        ctaSecondary: optionalCta('Secondary button'),
      }),
    },
    testimonials: {
      label: 'Testimonials Carousel',
      itemLabel: () => 'Testimonials',
      schema: fields.object({
        heading: requiredText('Heading'),
        subheading: optionalText('Subheading', true),
        testimonials: fields.array(
          fields.object({
            image: optionalImage('Image'),
            imageAlt: optionalText('Image alt'),
            rating: fields.integer({
              label: 'Rating',
              validation: { isRequired: true, min: 1, max: 5 },
            }),
            quote: requiredText('Quote'),
            text: requiredText('Review text', true),
            author: requiredText('Author'),
          }),
          {
            label: 'Reviews',
            itemLabel: (props) => props.fields.author.value || 'Review',
          }
        ),
      }),
    },
    cta: {
      label: 'Call To Action',
      itemLabel: () => 'CTA',
      schema: fields.object({
        heading: requiredText('Heading'),
        body: requiredText('Body', true),
        ctaPrimary: optionalCta('Primary button'),
        ctaSecondary: optionalCta('Secondary button'),
        backgroundColor: optionalText('Background color (hex or css var)'),
      }),
    },
    faq: {
      label: 'FAQ',
      itemLabel: () => 'FAQ',
      schema: fields.object({
        heading: requiredText('Heading'),
        body: optionalText('Description', true),
        faqs: fields.array(
          fields.object({
            question: requiredText('Question'),
            answer: requiredText('Answer', true),
          }),
          {
            label: 'Questions',
            itemLabel: (props) => props.fields.question.value || 'Question',
          }
        ),
        cta: optionalCta('Contact CTA'),
      }),
    },
    'contact-form': {
      label: 'Contact Form',
      itemLabel: () => 'Contact Form',
      schema: fields.object({
        heading: requiredText('Heading'),
        body: optionalText('Body', true),
        endpointUrl: requiredText('Apps Script endpoint URL'),
        submitLabel: optionalText('Submit button label'),
        note: optionalText('Small note', true),
      }),
    },
    'hero-centered': {
      label: 'Hero (Centered)',
      itemLabel: () => 'Hero Centered',
      schema: fields.object({
        badge: optionalText('Badge'),
        heading: requiredText('Heading'),
        subheading: optionalText('Subheading', true),
        ctaPrimary: optionalCta('Primary button'),
        ctaSecondary: optionalCta('Secondary button'),
      }),
    },
    'media-centered': {
      label: 'Media (Centered)',
      itemLabel: () => 'Media Centered',
      schema: fields.object({
        kind: fields.select({
          label: 'Media type',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
          ],
          defaultValue: 'image',
        }),
        image: optionalImage('Image'),
        imageAlt: optionalText('Image alt'),
        videoSrc: optionalText('Video URL'),
        poster: optionalImage('Poster image'),
        caption: optionalText('Caption', true),
      }),
    },
    gallery: {
      label: 'Gallery',
      itemLabel: () => 'Gallery',
      schema: fields.object({
        heading: optionalText('Heading'),
        body: optionalText('Description', true),
        variant: fields.select({
          label: 'Layout variant',
          options: [
            { label: 'Two-column grid', value: 'grid-2' },
            { label: 'Mosaic', value: 'mosaic' },
            { label: 'Three-column strip', value: 'strip' },
          ],
          defaultValue: 'grid-2',
        }),
        items: fields.array(
          fields.object({
            image: requiredImage('Image'),
            imageAlt: optionalText('Image alt'),
            caption: optionalText('Caption'),
          }),
          {
            label: 'Gallery items',
            itemLabel: (props) => props.fields.caption.value || 'Item',
          }
        ),
      }),
    },
    'stats-text': {
      label: 'Stats + Text',
      itemLabel: () => 'Stats + Text',
      schema: fields.object({
        heading: requiredText('Heading'),
        body: optionalText('Description', true),
        ctaPrimary: optionalCta('Primary button'),
        ctaSecondary: optionalCta('Secondary button'),
        stats: fields.array(
          fields.object({
            value: requiredText('Value'),
            label: requiredText('Label'),
          }),
          {
            label: 'Stats',
            itemLabel: (props) => props.fields.value.value || 'Stat',
          }
        ),
      }),
    },
    'light-cta-photo': {
      label: 'Light CTA + Photo',
      itemLabel: () => 'Light CTA + Photo',
      schema: fields.object({
        heading: requiredText('Heading'),
        body: optionalText('Description', true),
        image: requiredImage('Photo'),
        imageAlt: optionalText('Photo alt text'),
        cta: fields.object(
          {
            label: requiredText('Label'),
            href: requiredText('URL'),
          },
          { label: 'Button' }
        ),
      }),
    },
    'markdown-content': {
      label: 'Markdown Content',
      itemLabel: () => 'Markdown Content',
      schema: fields.object({
        heading: optionalText('Heading'),
        markdown: requiredText('Markdown body', true),
      }),
    },
    'insider-hero': {
      label: 'Insider Hero',
      itemLabel: () => 'Insider Hero',
      schema: fields.object({
        heading: requiredText('Heading'),
        subheading: optionalText('Subheading', true),
      }),
    },
    'polaroid-scroll': {
      label: 'Polaroid Scroll',
      itemLabel: () => 'Polaroid Scroll',
      schema: fields.object({
        heading: requiredText('Heading'),
        photos: fields.array(
          fields.object({
            image: requiredImage('Image'),
            imageAlt: optionalText('Image alt'),
            note: optionalText('Polaroid note'),
          }),
          {
            label: 'Photos',
            itemLabel: (props) => props.fields.note.value || 'Photo',
          }
        ),
        body: optionalText('Description', true),
        cta: optionalCta('Button (optional)'),
      }),
    },
  },
  { label: 'Page sections' }
);

export default config({
  storage,
  singletons: {
    announcement: singleton({
      label: 'Announcement Bar',
      path: 'src/data/announcement',
      format: { data: 'json' },
      schema: {
        enabled: fields.checkbox({ label: 'Show bar' }),
        items: fields.array(
          fields.object({
            text: requiredText('Text'),
            emoji: optionalText('Emoji'),
            link: fields.object(
              {
                label: optionalText('Link label'),
                url: optionalText('URL'),
              },
              { label: 'Optional link' }
            ),
          }),
          {
            label: 'Items',
            itemLabel: (props) => props.fields.text.value || 'Item',
          }
        ),
      },
    }),
    navigation: singleton({
      label: 'Navigation',
      path: 'src/data/navigation',
      format: { data: 'json' },
      schema: {
        logo: fields.object(
          {
            alt: requiredText('Logo alt'),
          },
          { label: 'Logo' }
        ),
        linksLeft: fields.array(
          fields.object({
            label: requiredText('Label'),
            href: requiredText('URL'),
          }),
          {
            label: 'Left links',
            itemLabel: (props) => props.fields.label.value || 'Link',
          }
        ),
        linksRight: fields.array(
          fields.object({
            label: requiredText('Label'),
            href: requiredText('URL'),
          }),
          {
            label: 'Right links',
            itemLabel: (props) => props.fields.label.value || 'Link',
          }
        ),
        cta: fields.object(
          {
            label: requiredText('Label'),
            href: requiredText('URL'),
          },
          { label: 'CTA button' }
        ),
      },
    }),
    footer: singleton({
      label: 'Footer',
      path: 'src/data/footer',
      format: { data: 'json' },
      schema: {
        brand: fields.object(
          {
            name: requiredText('Brand name'),
            tagline: requiredText('Tagline', true),
            address: optionalText('Address'),
          },
          { label: 'Brand' }
        ),
        columns: fields.array(
          fields.object({
            title: requiredText('Column title'),
            links: fields.array(
              fields.object({
                label: requiredText('Label'),
                href: requiredText('URL'),
              }),
              {
                label: 'Links',
                itemLabel: (props) => props.fields.label.value || 'Link',
              }
            ),
          }),
          {
            label: 'Columns',
            itemLabel: (props) => props.fields.title.value || 'Column',
          }
        ),
        legal: fields.object(
          {
            copyrightText: requiredText('Copyright text'),
            links: fields.array(
              fields.object({
                label: requiredText('Label'),
                href: requiredText('URL'),
              }),
              {
                label: 'Legal links',
                itemLabel: (props) => props.fields.label.value || 'Link',
              }
            ),
          },
          { label: 'Legal' }
        ),
      },
    }),
    insider: singleton({
      label: 'Insider Page',
      path: 'src/data/insider',
      format: { data: 'json' },
      schema: {
        title: requiredText('Page title'),
        description: requiredText('Meta description', true),
        heroHeading: requiredText('Hero heading'),
        heroSubheading: requiredText('Hero subheading', true),
      },
    }),
  },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'slug',
      path: 'src/data/pages/*',
      format: { data: 'json' },
      columns: ['slug', 'title'],
      schema: {
        id: requiredText('ID'),
        slug: requiredText('Slug (URL)'),
        title: requiredText('Page title'),
        description: requiredText('Meta description', true),
        heroIsDark: fields.checkbox({ label: 'Dark hero navbar' }),
        sections: sectionsField,
      },
    }),
    blog: collection({
      label: 'Blog posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      columns: ['date', 'category', 'title'],
      schema: {
        slug: requiredText('Slug (URL)'),
        title: requiredText('Title'),
        date: fields.date({
          label: 'Date',
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'News & Updates', value: 'News & Updates' },
            { label: 'Resources & Guides', value: 'Resources & Guides' },
            { label: 'Pet Care Tips', value: 'Pet Care Tips' },
          ],
          defaultValue: 'News & Updates',
        }),
        image: optionalImage('Cover image'),
        imageAlt: optionalText('Image alt'),
        excerpt: requiredText('Excerpt', true),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
  ui: {
    brand: {
      name: 'AstroVeb CMS',
    },
  },
});
