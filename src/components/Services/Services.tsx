import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Services.css';
import MainButton from '../Buttons/MainCta.astro';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Websites</Tab>
      <Tab>Search Engine Optimization</Tab>
      <Tab>Email Marketing</Tab>
    </TabList>

    <TabPanel>

        <div className="wrapper item1">
          <h3 className='services-h3'>Launch websites effortlessly with our expert guidance and support.</h3>
        </div>

        <div className="wrapper item2">
          <a className="button" href="/contact">Let's Connect</a>
        </div>
        <div className="wrapper item3">
          <h4 className='services-h4'>Website Design</h4>
          <p className='services-p'>Elevate your online presence with visually stunning and user-friendly website designs.</p>
        </div>

        <div className="wrapper item4">
          <h4 className='services-h4'>Website Development</h4>
          <p className='services-p'>Transform your ideas into powerful, responsive, and scalable web solutions.</p>
        </div>

        <div className="wrapper item5">
          <h4 className='services-h4'>Performance Optimization</h4>
          <p className='services-p'>Boost your website's speed and efficiency for an unparalleled user experience.</p>
        </div>

        <div className="wrapper item6">
          <h4 className='services-h4'>Data Analytics Reporting</h4>
          <p className='services-p'>Uncover actionable insights with comprehensive data analytics and reporting for your online performance.</p>
        </div>

    </TabPanel>

    <TabPanel>

        <div className="wrapper item1">
          <h3 className='services-h3'>Amplify your brand's social media impact with our expert guidance.</h3>
        </div>

        <div className="wrapper item2">
          <a className="button"href="/contact">Let's Connect</a>
        </div>
        <div className="wrapper item3">
          <h4 className='services-h4'>Content Calendar Development</h4>
          <p className='services-p'>Streamline your content planning with meticulously crafted content calendars for consistent and engaging messaging.</p>
        </div>

        <div className="wrapper item4">
          <h4 className='services-h4'>Social Media Advertising</h4>
          <p className='services-p'>Transform your ideas into powerful, responsive, and scalable web solutions.</p>
        </div>

        <div className="wrapper item5">
          <h4 className='services-h4'>Content Strategy</h4>
          <p className='services-p'>Boost your website's speed and efficiency for an unparalleled user experience.</p>
        </div>

        <div className="wrapper item6">
          <h4 className='services-h4'>Social Media Analytics Reporting</h4>
          <p className='services-p'>Uncover actionable insights and measure the success of your social media efforts with our detailed analytics reporting services.</p>
        </div>

    </TabPanel>

    <TabPanel>

        <div className="wrapper item1">
          <h3 className='services-h3'>Helping you Elevate your communication strategy and drive results</h3>
        </div>

        <div className="wrapper item2">
          <a className="button"href="/contact">Let's Connect</a>
        </div>
        <div className="wrapper item3">
          <h4 className='services-h4'>Automated Campaigns</h4>
          <p className='services-p'>Increase efficiency with automated email campaigns, ensuring timely and targeted communication.</p>
        </div>

        <div className="wrapper item4">
          <h4 className='services-h4'>Targeted Email Campaigns</h4>
          <p className='services-p'>Drive engagement with precisely targeted email campaigns that resonate with your audience.</p>
        </div>

        <div className="wrapper item5">
          <h4 className='services-h4'>Personalized Messaging</h4>
          <p className='services-p'>Enhance customer relationships by delivering personalized and relevant messages in your email marketing.</p>
        </div>

        <div className="wrapper item6">
          <h4 className='services-h4'>Analytics and Optimization</h4>
          <p className='services-p'>Measure performance, analyze data, and optimize your email strategy for continuous improvement and better results.</p>
        </div>

    </TabPanel>
    
  </Tabs>
);