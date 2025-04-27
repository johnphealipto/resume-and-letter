import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import Light from "../assets/fonts/Rubik-Light.ttf";
import SemiBold from "../assets/fonts/Rubik-SemiBold.ttf";
import Italic from "../assets/fonts/Rubik-Italic.ttf";
import { COLORS } from "../assets/colors";
import {
  CERTIFICATIONS,
  CONTACTS,
  EDUCATIONS,
  EXPERIENCES,
  SKILLS,
} from "../constants";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: Light,
    },
    {
      src: SemiBold,
      fontWeight: "semibold",
    },
    {
      src: Italic,
      fontStyle: "italic",
    },
  ],
});

const SectionTitle = ({ title }: { title: string }) => (
  <View style={{ marginBottom: 4.5 }}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ObjectiveSection = () => {
  return (
    <View>
      <SectionTitle title="Career Objectives" />
      <View style={{ gap: 3.5, marginTop: 5, marginLeft: 5 }}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 4,
              height: 4,
              borderRadius: 2,
              marginTop: 4,
            }}
          />
          <Text
            style={[styles.text, { flex: 1 }]}
            hyphenationCallback={(word) => [word]}
          >
            To be a world class Professional in my field of study.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 4,
              height: 4,
              borderRadius: 2,
              marginTop: 4,
            }}
          />
          <Text
            style={[styles.text, { flex: 1 }]}
            hyphenationCallback={(word) => [word]}
          >
            To work in a challenging environment where I can maximize my skills
            and potential for the optimum benefit of the industry, self and
            society at large.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 4,
              height: 4,
              borderRadius: 2,
              marginTop: 4,
            }}
          />
          <Text
            style={[styles.text, { flex: 1 }]}
            hyphenationCallback={(word) => [word]}
          >
            Be a beacon of guidance and inspiration for aspiring engineers.
          </Text>
        </View>
      </View>
    </View>
  );
};

const ExperienceSection = () => {
  return (
    <View>
      <SectionTitle title="Experience" />
      <View style={{ gap: 25, marginTop: 3 }}>
        {EXPERIENCES.map((item, idx) => (
          <View key={idx}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Text style={styles.subtitle}>{item.title}</Text>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text style={styles.subtitle}>{item.start}</Text>
                <View
                  style={{
                    height: 0.8,
                    width: 5,
                    backgroundColor: COLORS.dark,
                    opacity: 0.5,
                  }}
                />
                <Text style={styles.subtitle}>{item.end}</Text>
              </View>
            </View>
            <Text style={[styles.subtitle, { marginTop: 2 }]}>
              {item.company}{" "}
              <Text style={{ opacity: 0.75 }}>| {item.location}</Text>
            </Text>
            <View style={{ gap: 3.5, marginTop: 8, marginLeft: 5 }}>
              {item.description.map((desc, idx) => (
                <View key={idx} style={{ flexDirection: "row", gap: 8 }}>
                  <View
                    style={{
                      backgroundColor: COLORS.dark,
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                  <Text
                    style={[styles.text, { flex: 1 }]}
                    hyphenationCallback={(word) => [word]}
                  >
                    {desc}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const LeftView = () => (
  <View style={{ paddingRight: 15, width: 370 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          fontSize: 20,
          lineHeight: 1,
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 51.5, fontWeight: "semibold" }}>VERA</Text>
        <Text>OKONGWUIGWE</Text>
        {/* <Text style={{ fontSize: 14, marginTop: 10, opacity: 0.85 }}>
          Human Resource Manager
        </Text> */}
      </View>
      <View style={{ gap: 5, alignItems: "flex-end", marginTop: 9 }}>
        {CONTACTS.map((item, idx) => (
          <View
            key={idx}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <Text style={styles.text}>{item.detail}</Text>
            <View
              style={{
                backgroundColor: COLORS.dark,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              <item.icon size={10} />
            </View>
          </View>
        ))}
      </View>
    </View>
    <View style={{ marginTop: 20 }}>
      <ObjectiveSection />
    </View>
    <View style={{ marginTop: 25 }}>
      <ExperienceSection />
    </View>
    <View style={{ marginTop: 25 }}>
      <SectionTitle title="Education" />
      <View style={{ gap: 10 }}>
        {EDUCATIONS.map((item, idx) => (
          <View key={idx} style={[{ gap: 3, fontSize: 10, opacity: 0.75 }]}>
            <View
              style={{
                gap: 3,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "semibold", flex: 1 }}>
                {item.certificate}
              </Text>
              <Text>{item.duration}</Text>
            </View>
            {item.grade ? <Text>{item.grade}</Text> : null}
            <Text>{item.school}</Text>
            <Text>{item.location}</Text>
            {item.project ? (
              <Text>
                <Text style={{ fontWeight: "medium" }}>Project Title:</Text>{" "}
                {item.project}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  </View>
);

const RightView = () => (
  <View style={{ marginLeft: 10, flex: 1, gap: 25, marginTop: 9 }}>
    <View>
      <SectionTitle title="Skills" />
      <View style={{ gap: 5 }}>
        {SKILLS.map((skill, idx) => (
          <Text key={idx} style={styles.text}>
            {skill}
          </Text>
        ))}
      </View>
    </View>

    <View>
      <SectionTitle title="Certifications" />
      <View style={{ gap: 5 }}>
        <View style={{ gap: 10 }}>
          {CERTIFICATIONS.map((item, idx) => (
            <View key={idx} style={[{ gap: 2 }]}>
              <Text style={[styles.text, { fontWeight: "semibold" }]}>
                {item.title}
              </Text>
              <Text style={[styles.text, { fontSize: 9 }]}>
                {item.institute}
              </Text>
              <Text style={[styles.text, { fontSize: 9 }]}>
                Issued: {item.issued}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>

    <View>
      <SectionTitle title="Languages" />
      <View style={[styles.text, { gap: 5 }]}>
        <Text>English (Professional)</Text>
        <Text>Igbo (Native)</Text>
      </View>
    </View>
    <View>
      <SectionTitle title="Hobbies" />
      <View style={[styles.text, { gap: 3 }]}>
        <Text style={{ fontStyle: "italic" }}>- Reading</Text>
        <Text style={{ fontStyle: "italic" }}>- Cubing (Rubik's Cube)</Text>
      </View>
    </View>
    {/* <View>
      <SectionTitle title="Referees" />
      <View style={[styles.text, { gap: 3 }]}>
        <Text style={{ fontStyle: "italic" }}>Present on request</Text>
      </View>
    </View> */}
  </View>
);

const Resume = () => {
  return (
    <Document
      author="Vera Okongwuigwe"
      creator="Vera Okongwuigwe"
      title="Vera Okongwuigwe [Resumé]"
    >
      <Page style={styles.body} size="A4" wrap>
        <View style={{ flexDirection: "row", height: "100%" }}>
          <LeftView />
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 0.5,
              height: "100%",
              opacity: 0.5,
            }}
          />
          <RightView />
        </View>
      </Page>
    </Document>
  );
};

export default Resume;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: "Rubik",
    padding: 25,
    lineHeight: 1.25,
  },
  title: { fontSize: 14, fontWeight: "semibold", textTransform: "uppercase" },
  subtitle: {
    fontSize: 11.5,
  },
  text: {
    fontSize: 10,
    opacity: 0.75,
  },
});
